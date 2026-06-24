// Form View
import { 
    enableCreateMode, 
    enableEditMode, 
    getFormData, 
    fillForm 
} from "../views/form-view.js";

function handleCreateForm() {
    enableCreateMode();
}
function handleUpdateForm(todo) {
    enableEditMode();
    fillForm(todo);
}

function handleGetFormData() {
    return getFormData();
}

export {
    handleCreateForm,
    handleUpdateForm,
    handleGetFormData
}