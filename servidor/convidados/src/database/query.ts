export const QUERY = {
  init: 'SELECT 1',
  create: `INSERT INTO convidado(nome, telefone, email, principal) VALUES ($1, $2, $3, $4) RETURNING *`,
  findAll: 'SELECT * FROM convidado',
  findOne: 'SELECT * FROM convidado where id = $1',
  findOneComplete: `SELECT co.id, co.nome, co.telefone, co.email, cdo.id as familiar_id, cdo.nome  as familiar_nome, cdo.principal as familiar_principal FROM convidado co left join convidado cdo on co.id = cdo.principal WHERE co.id = $1`,
  delete: 'DELETE FROM convidado where id = $1',
  confirmFirst: `UPDATE convidado SET confirmacao_1=1 WHERE id = $1;`,
  confirmSecond: `UPDATE convidado SET confirmacao_2=1 WHERE id = $1;`,
  confirmThird: `UPDATE convidado SET confirmacao_3=1 WHERE id = $1;`,
};
