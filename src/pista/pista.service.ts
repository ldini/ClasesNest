import { Injectable } from '@nestjs/common';
import { PistaEntity } from './pista.entity/pista.entity';


@Injectable()
export class PistaService {

    private listaPistas : PistaEntity[] = [];

    getPistas():any{
            return { 
                    titulo: "Lista de Pistas",
                    pistas : this.listaPistas
                };
    }

    crearPista(pista):any{
        this.listaPistas.push(pista);
        return {mensaje:"se creo la pista"}
    }
   

}
