/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { SourceMap } from "module";
import { totalmem } from "os";

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

	let alunos:Array<Aluno> = [
		{nome: 'Leandro', idade: 26, nota: 8.3},
		{nome: 'Luana', idade: 28, nota: 6.5},
		{nome: 'Lais', idade: 30, nota: 9.9}
	];

	let soma = alunos.reduce( ( ant, atual ) => ant + atual.nota, 0 )
	console.log(soma)

	

	
});
