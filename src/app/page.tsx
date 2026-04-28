'use client'

import { List } from "@/components/List";
import { TaskProvider } from "@/contexts/TaskContext";

function page() {
  return (
    <div>
      <TaskProvider>
        <List/>
      </TaskProvider>
    </div>
  );
}

export default page;
