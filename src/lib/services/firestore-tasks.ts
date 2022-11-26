import { toaster } from "@specialdoom/proi-ui";
import { collection, query, where, getDocs, setDoc, doc, orderBy } from "firebase/firestore";
import { firestore } from "../../firebase";
import { getDayId } from "../utils/day";
import type { Task } from "../utils/types";
import type { Dayjs } from "dayjs";
import { tasks as tasksStore } from "../stores/days";

const tasksRef = collection(firestore, 'tasks');

export async function getTasksForUser(uid: string, date: Dayjs) {
    const dateId = getDayId(date);

    const tasks: Task[] = [];

    const q = query(tasksRef,
        where("uid", "==", uid),
        where("dateId", "==", dateId),
        orderBy("date"));

    const qSnapshot = await getDocs(q);

    qSnapshot.forEach(doc => {
        const task = { ...doc.data(), timestamp: doc.data().date.toDate() } as Task;

        tasks.push(task);
    });

    tasksStore.set(tasks);
}

export function addTaskForUser(uid: string, task: Task) {
    const dateId = getDayId(task.date)

    setDoc(doc(tasksRef), {
        title: task.title,
        description: task.description,
        type: task.type,
        date: new Date(),
        dateId,
        uid
    })
        .then(() => toaster.success("Task uploaded successfully!"))
        .catch(e => {
            toaster.error("Error while adding task!", e.message)
        })
}