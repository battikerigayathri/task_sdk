use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Serialize, Deserialize, Debug)]
pub struct Task {
    pub id: u32,
    description: String,
    pub completed: bool,
}

#[wasm_bindgen]
impl Task {
    #[wasm_bindgen(getter)]
    pub fn description(&self) -> String {
        self.description.clone()
    }
}

#[wasm_bindgen]
pub struct TaskManager {
    tasks: Vec<Task>,
}

#[wasm_bindgen]
impl TaskManager {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self { tasks: Vec::new() }
    }

    pub fn add_task(&mut self, description: String) {
        let new_id = (self.tasks.len() as u32) + 1;
        let task = Task {
            id: new_id,
            description,
            completed: false,
        };
        self.tasks.push(task);
    }

    pub fn get_tasks_json(&self) -> String {
        serde_json::to_string(&self.tasks).unwrap_or_else(|_| "[]".to_string())
    }

    // --- 1. UPDATE ---
    pub fn toggle_task(&mut self, id: u32) -> bool {
        if let Some(task) = self.tasks.iter_mut().find(|t| t.id == id) {
            task.completed = !task.completed;
            return true;
        }
        false
    }

    // --- 2. DELETE ---
    pub fn delete_task(&mut self, id: u32) -> bool {
        let initial_len = self.tasks.len();
        self.tasks.retain(|t| t.id != id);
        self.tasks.len() < initial_len
    }

    // --- 4. LOAD (Import) ---
    pub fn load_tasks_from_json(&mut self, json: String) -> bool {
        match serde_json::from_str::<Vec<Task>>(&json) {
            Ok(loaded_tasks) => {
                self.tasks = loaded_tasks;
                true
            }
            Err(_) => false,
        }
    }
}
