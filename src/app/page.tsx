'use client'

import { List } from "@/components/List";
import { TaskProvider } from "@/contexts/TaskContext";

function page() {
  return (
    <div className="container mx-auto">
      <TaskProvider>
        <List/>
      </TaskProvider>
    </div>
  );
}

export default page;
