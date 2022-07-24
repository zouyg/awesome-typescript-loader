function classes(...names: Array<string | undefined>) {
  return names.filter(v => v != null).join(' ');
}

export default classes;