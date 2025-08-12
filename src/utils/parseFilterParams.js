const parseType = (contactType) => {
  const types = ['work', 'home', 'personal'];
  if (typeof contactType === 'undefined') {
    return undefined;
  } else if (types.includes(contactType)) {
    return contactType;
  }
  return undefined;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'string') {
    const lowerFav = isFavourite.trim().toLowerCase();
    if (lowerFav === 'true') return true;
    if (lowerFav === 'false') return false;
    return undefined;
  }
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;
  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
