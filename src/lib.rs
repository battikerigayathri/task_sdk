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
}
