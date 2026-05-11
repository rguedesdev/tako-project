// Validação de dados que fazia parte do controller
class UserValidation {
  static create(data: any) {
    if (!data.name) {
      throw new Error("Name obrigatório");
    }

    if (!data.email) {
      throw new Error("Email obrigatório");
    }

    if (!data.password || data.password.length < 6) {
      throw new Error("Senha precisa ter no mínimo 6 caracteres");
    }

    if (!data.nickname || data.nickname.length < 6) {
      throw new Error("Nickname inválido");
    }
  }
}

export { UserValidation };
