/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
import formatReservationDate from "./format-reservation-date";
import formatReservationTime from "./format-reservation-date";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5002";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieves all existing reservation.
 * @returns {Promise<[reservation]>}
 *  a promise that resolves to a possibly empty array of reservation saved in the database.
 */

export async function listReservations(params, signal) {
  const url = new URL(`${API_BASE_URL}/reservations`);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value.toString())
  );
  return await fetchJson(url, { headers, signal }, [])
    .then(formatReservationDate)
    .then(formatReservationTime);
}
//--------------------------------------------------------

export async function listTables(params, signal) {
  // Construct the URL for the API call
  const url = new URL(`${API_BASE_URL}/tables`);

  // Make the API call and handle the response
  return await fetchJson(url, { headers, signal }, [])
    .then(formatTableId)
    .then(formatTableStatus);
}

// Optional: Functions to format table ID and status if needed
function formatTableId(tables) {
  return tables.map((table) => {
    // Perform any formatting on table.id here
    return table;
  });
}

function formatTableStatus(tables) {
  return tables.map((table) => {
    // Perform any formatting on table.status here
    return table;
  });
}

export async function cancelReservation(reservationId, signal) {
  const url = `${API_BASE_URL}/reservations/${reservationId}/status`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: {
        status: "cancelled",
      },
    }),
    signal,
  };
  return await fetchJson(url, options, {});
}

//check function name
export async function createReservation(reservation, signal) {
  console.log("CREATE RESERVATION CALLED", reservation);
  const url = `${API_BASE_URL}/reservations`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: reservation }),
    signal,
  };
  return await fetchJson(url, options, reservation);
}

export async function createTable(table, signal) {
  console.log("create table called");
  const url = `${API_BASE_URL}/tables`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: table }),
    signal,
  };
  return await fetchJson(url, options, table);
}

export async function seatReservationStatus(table_id, reservation_id, signal) {
  console.log("tableID:", table_id, "RES", reservation_id);
  const url = `${API_BASE_URL}/tables/${table_id}/seat`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: {
        reservation_id,
      },
    }),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function finishTableStatus(table_id, signal) {
  const url = `${API_BASE_URL}/tables/${table_id}/seat`;
  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify({
      data: {
        status: "free",
      },
    }),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function updateReservation(reservation_id, formData, signal) {
  const url = `${API_BASE_URL}/reservations/${reservation_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: formData }),
    signal,
  };

  return await fetchJson(url, options);
}

export async function readReservation(reservationId, signal) {
  const url = `${API_BASE_URL}/reservations/${reservationId}`;
  return await fetchJson(url, { headers, signal }, {});
}
