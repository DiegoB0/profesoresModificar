import axios from 'axios';

export const getAlumnosRequest = async () =>
	await axios.get('http://localhost:5000/alumnos');
