import { Convidado } from './convidado.entity';

class ConvidadoFromJoin {
  id: number;
  nome: string;
  telefone?: string;
  email?: string;
  familiar_id: number;
  familiar_nome?: string;
  familiar_principal?: number;

  constructor(object: ConvidadoFromJoin) {
    Object.assign(this, object);
  }
}

export class ConvidadoComplete {
  rows: ConvidadoFromJoin[];

  constructor(rows: ConvidadoFromJoin[]) {
    this.rows = rows;
  }
  toConvidado() {
    const { id, nome, telefone, email } = this.rows[0];

    const principal = new Convidado({ nome, telefone, email }, id);
    this.rows.forEach((r) => {
      principal.familiares.push(
        new Convidado(
          {
            nome: r.familiar_nome,
            principal: r.familiar_principal,
          },
          r.familiar_id,
        ),
      );
    });

    return principal;
  }
}
