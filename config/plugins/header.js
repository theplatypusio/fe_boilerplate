module.exports = {
  async headers() {
    return [
      {
        source: '/login',
        headers: [
          {
            key: 'x-frame-options',
            value: 'deny',
          },
        ],
      },
    ];
  },
};
