export const mainHeading1 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 2.5,
    },
  },
};

export const mainHeading2 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 3,
    },
  },
};

export const mainHeading3 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 3.5
    },
  },
};

export const mobileHeading1 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 0.3,
    },
  },
};
export const mobileHeading2 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 1,
    },
  },
};
export const mobileHeading3 = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      delay: 1.4,
    },
  },
};

export const firstHeading = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

export const secondHeading = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.45,
        ease: "easeIn",
      },
    }),
  };

export const thirdHeading = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeIn",
      },
    }),
  };