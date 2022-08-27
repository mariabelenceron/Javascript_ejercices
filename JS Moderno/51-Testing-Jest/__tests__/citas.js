import Citas from '../js/classes/Citas';

describe('Probar clases de citas', () => {

    const citas = new Citas();
    const id = Date.now();


    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Belen',
            telefono: '0997702037',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Belen',
            telefono: '0997702037',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar citas', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });

});