const age = Math.random() * 120

if (age < 11) {
  console.log('Child (under 11)')
} else if (age < 13) {
  console.log('Tween (between 11 and 13)')
} else if (age < 20) {
  console.log('Teenager (between 13 and 19)')
} else if (age < 26) {
  console.log('Young adult (between 20 and 25')
} else if (age < 65) {
  console.log('Adult (between 26 and 64)')
} else {
  console.log('Elderly (over 65)')
}
