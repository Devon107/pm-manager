'use client'
import { Metadata } from "next"
import {tasks as data} from "../../../lib/data"
import KanbanBox from "@/components/ui/dashboard/kanban-box";
import { useState } from "react";
import type { Task } from "@/lib/interfaces";
export const metadata : Metadata = {
  title: 'Dashboard',
}
const todos = data.filter((task) => !task.completed && !task.inprogress)
const doing = data.filter((task) => task.inprogress && !task.completed)
const done = data.filter((task) => task.completed)
export default function Kanban() {
  const [tasks, setTasks] = useState<Task[]>(todos);
  return (
    <section className="grid grid-cols-3 gap-4">
      <KanbanBox title="To Do" desc="Tasks that are not being worked on." tasks={tasks} setTasks={setTasks}/>
      <KanbanBox title="Doing" desc="Tasks that are being worked on." tasks={doing} setTasks={setTasks}/>
      <KanbanBox title="Done" desc="Tasks that have been completed." tasks={done} setTasks={setTasks}/>
    </section>
  )
}