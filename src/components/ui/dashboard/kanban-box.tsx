"use client";
import { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import type { Task } from "@/lib/interfaces";
type Props = {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
	title: string;
	desc?: string;
};
export default function KanbanBox(props: Props) {
	const { tasks, setTasks, title, desc } = props;

  const [List, task] = useDragAndDrop<
		HTMLUListElement,
		{ id: number; title: string; description: string; completed: boolean }
	>(tasks, {
		group: "todoList",
		plugins: [animations()],
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{desc}</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-4 min-h-[300px]" ref={List}>
					{task.map((todo) => (
						<li
							key={todo.id}
							className="flex items-center space-x-4 rounded-md border p-4"
						>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={(e) => {
									setTasks((prevTasks) => {
										return prevTasks.map((task) => {
											if (task.id === todo.id) {
												return { ...task, completed: e.target.checked };
											}
											return task;
										});
									});
								}}
							/>
							<p>{todo.title}</p>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
