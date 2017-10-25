/* @flow */

class ContextSimulator {
  _platform: string;

  _mockFn: Function;

  constructor({ platform, mockFn }: { platform: string, mockFn?: Function }) {
    this._platform = platform;

    // $FlowExpectedError
    this._mockFn = mockFn || jest.fn;
  }

  createTextContext(text: string) {
    return {
      client: {},
      session: {
        user: {
          id: '__ID__',
        },
      },
      event: {
        isMessage: true,
        isText: true,
        message: {
          text,
        },
        text,
      },
      // $FlowExpect
      sendText: this._mockFn(),
    };
  }
}

module.exports = ContextSimulator;
