import { toaster } from "@specialdoom/proi-ui";
import type { Dayjs } from "dayjs";
import { collection, query, where, getDocs, setDoc, doc, documentId } from "firebase/firestore";
import { firestore } from "../../firebase";
import { getDayId } from "../utils/day";
import type { Task, Todo } from "../utils/types";

const todosRef = collection(firestore, 'todos');

export async function getTodosForUser(uid: string, date: Dayjs) {
    const dateId = getDayId(date)

    const todos = [];

    const q = query(todosRef, where("uid", "==", uid), where("dateId", "==", dateId));

    const qSnapshot = await getDocs(q);

    qSnapshot.forEach(doc => {
        todos.push(doc.data())
    });

    return todos;
}

export function addTodoForUser(uid: string, todo: Todo) {
    const dateId = getDayId(todo.date)

    setDoc(doc(todosRef), {
        title: todo.title,
        active: todo.active,
        dateId,
        uid
    })
        .catch(e => {
            toaster.error("Error while adding task!", e.message)
        })
}