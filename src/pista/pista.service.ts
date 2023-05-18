import { Injectable } from '@nestjs/common';
import { PistaEntity } from './pista.entity/pista.entity';
import * as fs from 'fs'; 

@Injectable()
export class PistaService {


    private cargarPistas():any{
        let texto: string = fs.readFileSync('abc.txt', 'utf8');
        let pistas = texto.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));

        let listaPistas = [];

        for (let i = 0; i < pistas.length; i++) {
            let pista = new PistaEntity(pistas[i][0],pistas[i][1],pistas[i][2], pistas[i][3],pistas[i][4]);
            listaPistas.push(pista);
        }
        return listaPistas;
    }


    public addPista(pista : PistaEntity) : any {
           
            const Ipista = new PistaEntity('','','','','');
            Ipista.id = pista.id;
            Ipista.titulo = pista.titulo;
            Ipista.duracion = pista.duracion;
            Ipista.interprete = pista.interprete;
            Ipista.fecha = pista.fecha;
        
            fs.appendFileSync('abc.txt',`\n${Ipista.toString()}`);
            return {mensaje: `se creo la pista ${Ipista.toString()}`};
    }

    getPistas():any{
            return { 
                    titulo: "Lista de Pistas",
                    pistas : this.cargarPistas()
                };
    }

    //eliminar pista por id
    eliminarPista(id:string):string{
        let txt:string = fs.readFileSync('abc.txt', 'utf8')
        
        let pistas = txt.split('\n').map(e=>e.replace('\r','')).map(e=>e.split(','));
        
        let listaPistas = [];

        for(let i =0; i < pistas.length; i++) {
            if(id != pistas[i][0]){
            let pista = new PistaEntity(pistas[i][0],pistas[i][1],pistas[i][2],pistas[i][3],pistas[i][4]);
            listaPistas.push(pista);
            }
        }
        console.log(listaPistas);
        fs.writeFileSync('abc.txt',listaPistas.join('\n'))

        return `Eliminado pista con id = ${id}`
    }

   
}
