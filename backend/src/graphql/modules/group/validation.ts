class GroupValidation {
  static createGroup(data: any) {
    if (!data.name) {
      throw new Error("O nome da Scan é obrigatório!");
    }

    if (!data.description) {
      throw new Error("A descrição é obrigatória!");
    }

    if (!data.country) {
      throw new Error("O país é obrigatório!");
    }
  }
}

export { GroupValidation };
