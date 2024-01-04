import { host } from '../constants/apiConstants';

export async function getTickets() {
  await fetch(host + '/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });

  const data = await fetch(host + '/tickets');
  return await data.json();
}
