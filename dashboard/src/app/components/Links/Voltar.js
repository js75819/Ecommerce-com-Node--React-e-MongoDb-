import React from 'react';
import { Link } from 'react-router-dom';

export default ({ path}) =>  (<Link className="Link-Voltar" to={path}>{"< Voltar"}</Link>);
    