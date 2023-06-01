const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets');

describe('This will test getTicketByName', () => {
        const tickets = [
            {name: 'Ticket 1', id: 1}, 
            {name: 'Ticket 2', id: 2},
            {name: 'Ticket 3', id: 3}
        ];
            test('returns null when no object is found with the given name', () => {
                const ticket = getTicketByName(tickets, 'Ticket 4');
                expect(ticket).toBeNull();
            });

            test('returns the ticket object when given a valid name', () => {
                const ticket = getTicketByName(tickets, 'Ticket 2');
                expect(ticket).toEqual({ name: 'Ticket 2', id: 2 });
            });

            test('is case-insensitive when matching names', () => {
                const ticket = getTicketByName(tickets, 'ticket 3');
                expect(ticket).toEqual({ name: 'Ticket 3', id: 3 });
            });
            
    });
    
    describe('this will test calculateTotalFromTicketNames', () => {
        const ticket = [
            {name: 'adult', priceInCents: 1000},
            {name: 'child', priceInCents: 500},
            {name: 'Vip', priceInCents: 2000},
        ];
        test('should return the correcr total value for the given ticket names', () => {
            const names = ['adult', 'child']
            const total = calculateTotalFromTicketNames (ticket, names);
            expect(total).toBe(1500)
        });
        
        test('should return the correcr total value for the given ticket names', () => {
            const names = ['teenage', 'baby']
            const total = calculateTotalFromTicketNames (ticket, names);
            expect(total).toBe(0)
        });
    });