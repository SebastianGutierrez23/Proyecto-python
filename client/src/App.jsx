import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage} from "./pages/TasksPage";
import { Tasksformpage } from "./pages/Tasksformpage";



function App () {
  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<Tasksformpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 