import React from "react";
import alunos from '../../data/alunos'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const alunosLi = alunos.map((aluno) => {
    return (
                <li key={aluno.nome}>
                 {aluno.id} ) {aluno.nome} -&gt; {aluno.nota}
                </li>
    );
});

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {alunosLi}              
            </ul>
        </div>
    );
};