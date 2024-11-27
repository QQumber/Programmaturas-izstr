import { pool } from '../../db'; // Import the DB connection pool

export async function POST(request) {
    try {
        const {
            client_id,
            service_id,
            car_details,
            appointment_date,
            appointment_time,
            notes,
        } = await request.json();

        const { 
            make, 
            model, 
            year, 
            VIN, 
            license_plate 
        } = car_details;
        
        // Insert car
        const carResult = await pool.query(
            'INSERT INTO cars (make, model, year, VIN, license_plate) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [make, model || null, year || null, VIN || null, license_plate]
        );
        //const car_id = carResult.rows[0].id;
        const car = carResult.rows[0];
        const status = "pending";

        // Insert appointment
        const appointmentResult = await pool.query(
            'INSERT INTO appointments (client_id, service_id, car_id, appointment_date, appointment_time, status, notes) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, appointment_date, appointment_time, status, notes',
            [client_id, service_id, car.id, appointment_date, appointment_time, status, notes]
        );
        const appointment = appointmentResult.rows[0];

        return new Response(JSON.stringify({
            message: 'Booking successful',
            appointment: appointment,
            car: car,
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error booking appointment:', error);
        return new Response(JSON.stringify({ 
            error: 'Booking failed', 
            details: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
