import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets } from '../../redux/actions/actions';
import logo from '../../assets/images/S7_Logo.png';

const Tickets = () => {
  const tickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div>
      {tickets == 'loading' && <p>loading</p>}

      {tickets != 'loading' &&
        tickets.map((ticket) => (
          <div key={ticket._id}>
            <span>
              <a>{ticket.price}</a>
              <img src={logo} />
            </span>
            <div>
              <span>
                <a>
                  {ticket.segment.from} - {ticket.segment.to}
                </a>
                <p>{ticket.segment.date}</p>
              </span>
              <span>
                <a></a>
                <p></p>
              </span>
              <span>
                <a></a>
                <p></p>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tickets;
