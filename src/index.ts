/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	class Aluno {
		nome: string;
		idade: number;
		nota: number;
		constructor(nome: string, idade: number, nota: number) {
			this.nome = nome
			this.idade = idade
			this.nota = nota
			
		}
	
	}

	let a1 =  new Aluno ('Lendro', 26, 8)
	let a2 = new Aluno ('Luana', 29, 7)
	let a3 = new Aluno ('Lais', 30, 10)

	let alunos:Array<Aluno> = [
		{nome: 'Leandro', idade: 26, nota: 8},
		{nome: 'Luana', idade: 28, nota: 7},
		{nome: 'Lais', idade: 30, nota: 10}
	];

	let soma = [8 + 7 + 10]
	console.log(soma)
	
});
