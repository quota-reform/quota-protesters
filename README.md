# Protester's API of Quota Reform Movement in Bangladesh

This API is public. so you can easily get all data with well-organized. here the API route list
```bash
# Get all protesters data
domain/api

# Get all protesters of a district
domain/api/<district_name>

# Get a single protesters info
domain/api/info/<protesters_name>

# Get some filterd data of protesters. You can apply multiple params 
domain/api?gender=male
domain/api?date=20240720
domain/api?from=20240720&to=20240720
domain/api?status=killed
domain/api?type=student
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Add new Protesters
```bash
npm run new <district> <name>
# district name same as district list bellow
# name is wrap with qutation (")
# example: 
npm run new "Cox's Bazar" "Sofiqul Islam"
```
<details>
<summary>District list of Bangladesh</summary>

1. Kishoreganj
2. Gopalganj
3. Gazipur
4. Faridpur
5. Dhaka
6. Narsingdi
7. Narayanganj
8. Munshiganj
9. Manikganj
10. Madaripur
11. Rajbari
12. Shariatpur
13. Tangail
14. Cumilla
15. Chattogram
16. Chandpur
17. Brahmanbaria
18. Bandarban
19. Noakhali
20. Lakshmipur
21. Khagrachhari
22. Feni
23. Cox's Bazar
24. Rangamati
25. Patuakhali
26. Jhalokati
27. Bhola
28. Barishal
29. Barguna
30. Pirojpur
31. Sylhet
32. Sunamganj
33. Moulvibazar
34. Habiganj
35. Khulna
36. Jhenaidah
37. Jashore
38. Chuadanga
39. Bagerhat
40. Satkhira
41. Narail
42. Meherpur
43. Magura
44. Kushtia
45. Chapainawabganj
46. Natore
47. Joypurhat
48. Naogaon
49. Bogura
50. Sirajganj
51. Rajshahi
52. Pabna
53. Dinajpur
54. Gaibandha
55. Rangpur
56. Panchagarh
57. Nilphamari
58. Lalmonirhat
59. Kurigram
60. Thakurgaon
61. Sherpur
62. Netrokona
63. Mymensingh
64. Jamalpur
</details>

## Update protesters info
To update protester information, search for his name in his district directory. E.g. 

```json
// protesters/Cox's Bazar/Sofiqul Islam/info.json

// Protester's info JSON file 
// remove unnessesary options.

{
  "name": "Sofiqul Islam",
  "district": "Cox's Bazar",
  "address": "",
  "gender": "Male/Female",
  "type": "student/journalist/civilian",
  "institute": "institute",
  "class": "5/6/7/8/9/10/11/12/Honours/Masters",
  "status": "Injured/Killed",
  "date": "20240722", //yyyymmdd
  "dateOfBirth": "",
  "dateOfDeath": "",
  "brief": ""
}
```

### Add protester's images
Every protester has a powerful story. A story is not complete without pictures. So we need to update some images. Here, we strongly recommend, protester image should be **600x600** px and file name should be **image.jpg**

The name of the gallery image file will be used as the caption of that image. All images related to a protester should be placed inside this directory. `protesters/Cox's Bazar/Sofiqul Islam/photos/`
