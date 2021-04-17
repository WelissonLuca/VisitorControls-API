const status = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  BAD_REQUEST: 400,
}

const messages = {
  USER_CREATED: 'Usuário cadastrado com sucesso',
  VISIT_CREATED: 'Visita cadastrada com sucesso',
  USER_NOT_FOUND: 'Usuário não cadastrado',
  DEFAULT_ERROR: 'Erro interno. tentar novamente mais tarde',
  USUARIO_EXISTS: 'Usuário já registrado no banco de dados.',
  NO_EMPTY_FIELDS: 'Os campos não podem estar vazios',
  NAME_NOT_VALID: 'O nome deve ter 3 ou mais caracteres',
  ID_NOT_VALID: 'O número do RG não é válido',
  DATE_NOT_VALID: 'Período selecionado inválido',
}

module.exports = { status, messages }
