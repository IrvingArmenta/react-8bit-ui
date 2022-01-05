import { registerTransform, registerValueTransform } from 'theo';

const register = () => {
  registerValueTransform(
    // Name to be used with registerTransform()
    'easing/web',
    // Determine if the value transform
    // should be run on the specified prop
    (prop) => prop.get('type') === 'easing',
    // Return the new value
    (prop) => {
      const [x1, y1, x2, y2] = String(prop.get('value'))
        .replace(/\[|\]/g, '')
        .split(',');
      return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
    }
  );

  registerTransform('web', ['color/rgb', 'easing/web']);
};

export default register;
