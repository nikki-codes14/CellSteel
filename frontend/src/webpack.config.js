export const module = {
        module: {
          rules: [
            {
              test: /\.css$/i,
              loader: "css-loader",
              options: {
                url: true,
              },
            },
          ],
        },
      };