import { toaster } from "@specialdoom/proi-ui";
import type { Dayjs } from "dayjs";
import { collection, query, where, getDocs, setDoc, doc, documentId } from "firebase/firestore";
import { firestore } from "../../firebase";
import { getDayId } from "../utils/day";
import type { Task } from "../utils/types";

const tasksRef = collection(firestore, 'tasks');

export async function getTasksForUser(uid: string, date: Dayjs) {
    const dateId = getDayId(date)

    const tasks = [];

    const q = query(tasksRef, where("uid", "==", uid), where("dateId", "==", dateId));

    const qSnapshot = await getDocs(q);

    qSnapshot.forEach(doc => {
        tasks.push(doc.data())
    });

    return tasks;
}

export function addTaskForUser(uid: string, task: Task) {
    const dateId = getDayId(task.date)

    setDoc(doc(tasksRef), {
        title: task.title,
        description: task.description,
        type: task.type,
        dateId,
        uid
    })
        .then(() => toaster.success("Task uploaded successfully!"))
        .catch(e => {
            toaster.error("Error while adding task!", e.message)
        })
}