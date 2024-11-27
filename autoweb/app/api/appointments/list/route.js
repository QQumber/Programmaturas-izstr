import { pool } from '../../db'; 

export async function GET() {
    try {
        // Query
        const result = await pool.query(
            `SELECT a.id AS appointment_id, u.name, c.license_plate, a.appointment_date, a.appointment_time
            FROM appointments a
            JOIN user_profiles u ON a.client_id = u.id
            JOIN cars c ON a.car_id = c.id
            WHERE a.status = 'pending'`
        );

        if (result.rows.length > 0) {
            return new Response(JSON.stringify(
                result.rows
            ), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            // No results, return empty array
            return new Response(JSON.stringify(
                []
            ), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return new Response(
            JSON.stringify({ 
                error: 'Failed to fetch appointments' 
            }),{
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}