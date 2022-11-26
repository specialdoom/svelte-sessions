import { toaster } from "@specialdoom/proi-ui";
import type { Dayjs } from "dayjs";
import { collection, query, where, getDocs, addDoc, doc, updateDoc, documentId } from "firebase/firestore";
import { firestore } from "../../firebase";
import { getDayId } from "../utils/day";
import type { Todo } from "../utils/types";

const todosRef = collection(firestore, 'todos');

export async function getTodosForUser(uid: string, date: Dayjs) {
    const dateId = getDayId(date)

    const todos = [];

    console.log("here");

    const q = query(todosRef, where("uid", "==", uid), where("dateId", "==", dateId));

    const qSnapshot = await getDocs(q);

    qSnapshot.forEach(doc => {
        todos.push({ id: doc.id, ...doc.data() })
    });

    return todos.filter(t => t.active);
}

export async function addTodoForUser(uid: string, todo: Todo) {
    const dateId = getDayId(todo.date)

    const docRef = await addDoc(todosRef, {
        title: todo.title,
        active: todo.active,
        dateId,
        uid
    })
        .catch(e => {
            toaster.error("Error while adding task!", e.message)
        })

    // @ts-ignore
    return docRef.id;
}

export function inactivateTodo(todoId: string) {
    updateDoc(doc(todosRef, todoId), {
        active: false,
    })
        .catch(e => {
            toaster.error("Error while adding task!", e.message)
        })
}