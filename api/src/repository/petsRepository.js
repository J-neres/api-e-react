import { con } from './connection.js'

export async function cadastrarPet (nome) {
    const cmd = `
    insert into tnb_animais(nm_pet)
	        values('Nega');`

    const [ linhas ] = await (await con).query(cmd, [ nome ]);
    /*nome.id = linhas.insertId*/
    return linhas; 
    
}

export async function consultarPet() {
    const cmd = `select * from tb_pet`

    const [respost] = await (await con).query(cmd)
    return respost;
}