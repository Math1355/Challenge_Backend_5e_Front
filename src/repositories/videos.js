import config from '../config';
import { useState, useEffect } from 'react';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos/`;

function create(objetoDoVideo) {
  return fetch('http://localhost:8000/videos/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function getAll() {
  return fetch(URL_VIDEOS)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
  getAll,
};
