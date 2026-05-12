// Validação de dados que fazia parte do controller

class UserValidation {
  static signUp(data: any) {
    if (!data.name) {
      throw new Error("O nome é obrigatório!");
    }

    if (!data.email) {
      throw new Error("O email é obrigatório!");
    }

    if (!data.password || data.password.length < 6) {
      throw new Error("A senha precisa ter no mínimo 6 caracteres!");
    }

    if (!data.username || data.username.length < 6) {
      throw new Error("O username precisa ter no mínimo 6 caracteres!");
    }
  }

  static signIn(data: any) {
    if (!data.login) {
      throw new Error("Insira o username ou email!");
    }

    if (!data.password) {
      throw new Error("A senha é obrigatória!");
    }
  }
}

export { UserValidation };
