const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo:', () => {
  const testData = 'some data';

  test('should return value async', async () => {
    const result = await Ajax.echo(testData);
    expect(result).toBe(testData);
  });

  test('should return value with promise', () => {
    return Ajax.echo(testData).then((data) => {
      expect(data).toBe(testData);
    });
  });

  test('should catch error with promise', () => {
    return Ajax.echo(testData).catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test('should catch error with promise', async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe('error');
    }
  });
});

describe('Ajax: get:', () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }];
    response = { data: { todos } };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
