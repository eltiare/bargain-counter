// Copyright (c) 2013 Jeremy Nicoll
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function BargainCounter(opts) {
  opts = opts || {};
  this.startTime = null;
  this.direction = opts.go || opts.direction || 'up';
  this.up = this.direction === 'up';
  this.down = this.direction === 'down';
  this.setDuration(opts.duration);
}

BargainCounter.prototype = {

  start: function() {
    this.startTime =  this.now();
  },

  now: function() {
    return new Date().getTime();
  },

  elapsedTime : function() {
    return this.now() - this.startTime;
  },

  rawTime : function() {
    var ms = this.elapsedTime();
    if (this.down) {
      ms = this.duration - ms;
      if (ms < 0) { ms = 0; }
    }
    return ms;
  },

  time: function() {
    var ms = this.rawTime();
    var ret = {
      milliseconds: ms % 1000,
      seconds: Math.floor(ms / 1000) % 60,
      minutes: Math.floor(ms / 60000) % 60,
      hours: Math.floor(ms / 3600000) % 24,
      days: Math.floor(ms / 86400000)
    };
    for (var k in ret) {
      if (ret[k] < 0) { ret[k] = 0; }
    }
    return ret;
  },

  setDuration: function(opts) {
    if (typeof(opts) == 'number') {
      this.duration = opts;
    } else {
      var d = opts.milliseconds || 0;
      d = d + (opts.seconds || 0) * 1000;
      d = d + (opts.minutes || 0) * 60 * 1000;
      d = d + (opts.hours || 0) * 60 * 60 * 1000;
      d = d + (opts.days || 0) * 24 * 60 * 60 * 1000;
      this.duration = d;
    }
  }
}