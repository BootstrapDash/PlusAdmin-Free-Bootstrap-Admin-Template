(function ($) {
  'use strict';
  // ProgressBar JS Starts Here

  if ($('#circleProgress1').length) {
    var bar = new ProgressBar.Circle(circleProgress1, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#677ae4',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.34); // Number from 0.0 to 1.0
  }

  if ($('#circleProgress2').length) {
    var bar = new ProgressBar.Circle(circleProgress2, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#46c35f',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.54); // Number from 0.0 to 1.0
  }

  if ($('#circleProgress3').length) {
    var bar = new ProgressBar.Circle(circleProgress3, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#f96868',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.45); // Number from 0.0 to 1.0
  }

  if ($('#circleProgress4').length) {
    var bar = new ProgressBar.Circle(circleProgress4, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#f2a654',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.27); // Number from 0.0 to 1.0
  }

  if ($('#circleProgress5').length) {
    var bar = new ProgressBar.Circle(circleProgress5, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#57c7d4',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.67); // Number from 0.0 to 1.0
  }

  if ($('#circleProgress6').length) {
    var bar = new ProgressBar.Circle(circleProgress6, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#aaa',
        width: 4
      },
      to: {
        color: '#2a2e3b',
        width: 4
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.95); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine1').length) {
    var bar = new ProgressBar.Line(progressbarLine1, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: successColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.90); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine2').length) {
    var bar = new ProgressBar.Line(progressbarLine2, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: primaryColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.68); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine3').length) {
    var bar = new ProgressBar.Line(progressbarLine3, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: dangerColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.55); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine4').length) {
    var bar = new ProgressBar.Line(progressbarLine4, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: infoColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.35); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine5').length) {
    var bar = new ProgressBar.Line(progressbarLine5, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: warningColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.85); // Number from 0.0 to 1.0
  }

  if ($('#progressbarLine6').length) {
    var bar = new ProgressBar.Line(progressbarLine6, {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: secondaryColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.75); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark1').length) {
    var bar = new ProgressBar.Line(progressbarDark1, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: successColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.90); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark2').length) {
    var bar = new ProgressBar.Line(progressbarDark2, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: primaryColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.68); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark3').length) {
    var bar = new ProgressBar.Line(progressbarDark3, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: dangerColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.55); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark4').length) {
    var bar = new ProgressBar.Line(progressbarDark4, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: infoColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.35); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark5').length) {
    var bar = new ProgressBar.Line(progressbarDark5, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: warningColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.85); // Number from 0.0 to 1.0
  }

  if ($('#progressbarDark6').length) {
    var bar = new ProgressBar.Line(progressbarDark6, {
      color: '#323550',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailColor:"#151519",
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#000',
        width: 2
      },
      to: {
        color: secondaryColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        }

      }
    });

    bar.text.style.fontSize = '1rem';
    bar.animate(.75); // Number from 0.0 to 1.0
  }
})(jQuery);