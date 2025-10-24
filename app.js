const STORAGE_KEY = 'todoApp.tasks.v1';
let tasks = [];
let dragSrcId = null;
let filter = 'all';
let sortMode = 'created_desc';


// Elements
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const dueInput = document.getElementById('dueInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');
const taskForm = document.getElementById('taskForm');
const searchInput = document.getElementById('searchInput');
const statsEl = document.getElementById('stats');
const lastSavedEl = document.getElementById('lastSaved');
const emptyState = document.getElementById('emptyState');
const exportBtn = document.getElementById('exportBtn');
const importFile = document.getElementById('importFile');
const clearAllBtn = document.getElementById('clearAllBtn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filterBtn');
const sortSelect = document.getElementById('sortSelect');
const importLabel = document.querySelector('label[for="importFile"]');


// Helpers
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);
const save = () => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
lastSavedEl.textContent = 'Saved: ' + new Date().toLocaleTimeString();
};
const