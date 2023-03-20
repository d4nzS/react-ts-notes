function localSave(entityName: string, savingEntity: any): void {
  localStorage.setItem(entityName, JSON.stringify(savingEntity));
}

export default localSave;