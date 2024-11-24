import WAConvo    from '../src/waconvo';
import Client     from '../src/waconvo/client';
import Pagination from '../src/waconvo/client/pagination';

let waconvo;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

describe('WAConvo', () => {
  it('should export an WAConvo object', () => {
    expect(WAConvo).not.toBe(null);
  });

  describe('.instance', () => {
    beforeEach(() => {
      waconvo = new WAConvo(credentials);
    });

    it('should initialize an WAConvo instance', () => {
      expect(waconvo).toBeInstanceOf(WAConvo);
    });

    it('should throw an error', () => {
      expect(() => { new WAConvo(); }).toThrowError();
    });

    it('should have an client property', () => {
      expect(waconvo.client).toBeInstanceOf(Client);
    });

    it('should have an pagination property', () => {
      expect(waconvo.pagination).toBeInstanceOf(Pagination);
    });

    it('should pass .next on to the paginator', () => {
      waconvo.pagination.page = jest.fn();
      waconvo.next({});
      expect(waconvo.pagination.page).toHaveBeenCalledWith('next', {});
    });

    it('should pass .previous on to the paginator', () => {
      waconvo.pagination.page = jest.fn();
      waconvo.previous({});
      expect(waconvo.pagination.page).toHaveBeenCalledWith('previous', {});
    });

    it('should pass .first on to the paginator', () => {
      waconvo.pagination.page = jest.fn();
      waconvo.first({});
      expect(waconvo.pagination.page).toHaveBeenCalledWith('first', {});
    });

    it('should pass .last on to the paginator', () => {
      waconvo.pagination.page = jest.fn();
      waconvo.last({});
      expect(waconvo.pagination.page).toHaveBeenCalledWith('last', {});
    });
  });
});
