import { useState } from "react";
import { useEffect } from "react";

const db= "https://mindicador.cl/api"

const MiApi = () => {
    const [uf, setUf] = useState([]);
    const [dolar, setDolar] = useState([]);
    const [fecha, setFecha] = useState([]);
    const [euro, setEuro] = useState([]);
    const [ipc, setIpc] = useState([]);
    const [bitcoin, setBitcoin] = useState([]);
    useEffect(() => {
        fetch(db)
            .then((response) => response.json())
            .then((data) => {
                setUf(data.uf.valor);
                setDolar(data.dolar.valor);
                setFecha(data.fecha.fecha);
                setEuro(data.euro.valor);
                setIpc(data.ipc.valor);
                setBitcoin(data.bitcoin.valor);
            });
    }, []);

    const busqueda = () => {
        const imput = document.getElementById("imput").value;
        if (imput === "uf") {
            document.getElementById("resultado").innerHTML = uf;
        } else if (imput === "dolar") {
            document.getElementById("resultado").innerHTML = dolar;
        } else if (imput === "fecha") {
            document.getElementById("resultado").innerHTML = fecha;
        } else if (imput === "euro") {
            document.getElementById("resultado").innerHTML = euro;
        } else if (imput === "ipc") {
            document.getElementById("resultado").innerHTML = ipc;
        } else if (imput === "bitcoin") {
            document.getElementById("resultado").innerHTML = bitcoin;
        } else {
            document.getElementById("resultado").innerHTML = "No se encontro";
        }
    };

    return (
        <div>
            <input type="text" id="imput"/>
            <button onClick={busqueda}>Buscar</button>
            <p id="resultado"></p>
            <h2>Fecha: {fecha}</h2>
            <h2>Valor UF: {uf}</h2>
            <h2>Valor Dolar: {dolar}</h2>
            <h2>Valor Euro: {euro}</h2>
            <h2>Valor IPC: {ipc}</h2>
            <h2>Valor Bitcoin: {bitcoin}</h2>
        </div>
    );
};

export default MiApi;
