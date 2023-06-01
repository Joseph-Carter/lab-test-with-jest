const { getConcessionByID, calculateTotalFromIDs } = require('../src/concessions');

describe('this will test getConcessionByID', () => {
    const concessions = [
        { id: '1', name: 'concession 1'},
        { id: '2', name: 'concession 2'},
        { id: '3', name: 'concession 3'},
    ];
    test('return the concession value when given a value id', () => {
        const concession = getConcessionByID(concessions, '2');
        expect(concession).toEqual({ id: '2', name: 'concession 2'})
    });
     
    test('return null when no object is found with given id', () => {
        const concession = getConcessionByID(concessions, '4');
        expect(concession).toBeNull()
    });
});

describe('calculateTotalFromIDs', () => {
    const concessions = [
      { id: '1', name: 'Concession 1', priceInCents: 100 },
      { id: '2', name: 'Concession 2', priceInCents: 200 },
      { id: '3', name: 'Concession 3', priceInCents: 300 }
    ];
  
    test('calculates the correct total for a valid set of concession IDs', () => {
      const ids = ['1', '3'];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toBe(400);
    });
  
    test('returns 0 when no concession IDs are provided', () => {
      const ids = [];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toBe(0);
    });
  
    test('returns 0 when no matching concessions are found', () => {
      const ids = ['4', '5'];
      const total = calculateTotalFromIDs(concessions, ids);
      expect(total).toBe(0);
    });
  });
