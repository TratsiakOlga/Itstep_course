import options from './options';
import Flake from './flake';
import rand from "./rand";

import '../scss/flakes.scss';


setInterval(() => {
    let flake = new Flake(
      options.fonts[rand(0, options.fonts.length)],
      rand(0, options.maxWidth - 120),
      -20,
      options.flakes[rand(0, options.flakes.length)]
                    );

  flake.draw();
  flake.move(options.speeds[rand(0, options.speeds.length)]);
  }, 100);
                   

/*for(let i = 0; i < 100; i++){
  let flake = new Flake (options.fonts[rand(0, options.fonts.length)],
                         rand(0, options.maxWidth - 100),
                         rand(0, options.maxHeight),
                         options.flakes[rand(0, options.flakes.length)]
                        );*/

  