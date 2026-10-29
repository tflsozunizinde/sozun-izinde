# -*- coding: utf-8 -*-
import math
import random

# Function to add natural serration / fractal-like meanders between key anchor points
def serrate_boundary(anchors, jitter=0.35, segments=3):
    random.seed(42) # deterministic for consistency
    result = []
    n = len(anchors)
    for i in range(n):
        p1 = anchors[i]
        p2 = anchors[(i + 1) % n]
        result.append(p1)
        
        # Insert natural meandering / jagged points between p1 and p2
        lat1, lng1 = p1
        lat2, lng2 = p2
        dlat = lat2 - lat1
        dlng = lng2 - lng1
        dist = math.hypot(dlat, dlng)
        
        # More segments for longer border lines
        actual_segs = max(2, int(dist * segments / 3.0))
        for s in range(1, actual_segs):
            frac = s / float(actual_segs)
            mid_lat = lat1 + dlat * frac
            mid_lng = lng1 + dlng * frac
            
            # Normal perpendicular vector
            norm_lat = -dlng / (dist + 1e-6)
            norm_lng = dlat / (dist + 1e-6)
            
            # Jagged deviation
            seed_val = math.sin(mid_lat * 12.3 + mid_lng * 7.9) * math.cos(mid_lat * 5.1 - mid_lng * 11.7)
            offset = seed_val * jitter * min(dist * 0.18, 0.45)
            
            j_lat = round(mid_lat + norm_lat * offset, 3)
            j_lng = round(mid_lng + norm_lng * offset, 3)
            result.append([j_lat, j_lng])
            
    return result

# Define key geographical anchor vertices for each realm in Central Asia
KIPCAK_ANCHORS = [
    [56.8, 30.5], [57.2, 35.8], [56.9, 41.2], [57.4, 47.5], [56.8, 54.2], [55.9, 61.5],
    [54.8, 66.2], [53.5, 71.0], [52.1, 74.8], [50.2, 76.2], [48.8, 73.5], [47.9, 68.2],
    [46.8, 63.5], [45.8, 58.2], [45.1, 53.5], [44.5, 47.8], [44.0, 42.5], [44.5, 38.2],
    [45.8, 33.5], [47.5, 30.2], [49.8, 28.5], [52.4, 27.8], [55.0, 28.5]
]

OGUZ_ANCHORS = [
    [47.2, 48.5], [47.8, 52.2], [46.8, 56.5], [45.5, 59.8], [44.2, 62.0], [43.1, 62.2],
    [41.8, 61.5], [40.8, 58.8], [39.8, 56.2], [39.1, 53.5], [39.5, 50.8], [40.5, 49.2],
    [41.8, 48.2], [43.2, 47.8], [44.5, 48.2], [46.0, 48.2]
]

TURKMEN_ANCHORS = [
    [40.8, 51.5], [41.2, 54.8], [40.5, 58.2], [39.2, 61.2], [38.2, 63.2], [37.1, 63.0],
    [36.0, 60.8], [35.8, 57.5], [36.8, 54.2], [37.9, 52.5], [39.0, 50.8], [40.0, 50.8]
]

CIGIL_ANCHORS = [
    [44.2, 59.2], [44.5, 62.5], [43.8, 65.5], [42.8, 67.5], [41.5, 68.5], [40.2, 67.8],
    [39.2, 65.8], [38.5, 63.5], [38.2, 60.5], [39.1, 58.2], [40.2, 57.2], [41.5, 57.0],
    [42.8, 57.2], [43.8, 58.2]
]

KARLUK_ANCHORS = [
    [46.2, 71.5], [46.5, 75.8], [45.5, 79.8], [44.5, 83.2], [43.2, 85.0], [42.1, 84.2],
    [41.0, 82.2], [39.8, 79.8], [39.0, 77.5], [39.2, 74.8], [40.1, 72.8], [41.2, 71.5],
    [42.5, 70.8], [43.8, 70.8], [45.0, 71.2]
]

UYGUR_ANCHORS = [
    [45.2, 79.5], [45.5, 84.8], [44.5, 89.2], [43.2, 93.5], [42.1, 96.5], [41.0, 97.2],
    [39.8, 96.2], [38.8, 93.8], [37.8, 90.5], [37.5, 86.5], [37.8, 82.5], [38.8, 80.5],
    [40.1, 79.8], [41.5, 79.5], [43.0, 79.5], [44.2, 79.5]
]

KIRGIZ_ANCHORS = [
    [47.5, 73.2], [47.8, 77.2], [46.8, 80.5], [45.5, 82.5], [44.2, 83.5], [43.0, 82.2],
    [42.0, 79.8], [41.8, 76.5], [42.0, 73.5], [43.0, 71.8], [44.2, 71.5], [45.5, 71.8],
    [46.8, 72.2]
]

YAGMA_ANCHORS = [
    [50.2, 63.2], [50.5, 67.2], [49.5, 71.2], [48.2, 75.2], [47.1, 77.2], [45.8, 75.2],
    [44.8, 72.2], [43.8, 68.2], [43.8, 64.8], [44.8, 62.8], [46.0, 61.8], [47.2, 61.8],
    [48.5, 61.8], [49.5, 62.2]
]

# Generate serrated coordinates
kipcak_poly = serrate_boundary(KIPCAK_ANCHORS, jitter=0.42, segments=4)
oguz_poly = serrate_boundary(OGUZ_ANCHORS, jitter=0.38, segments=4)
turkmen_poly = serrate_boundary(TURKMEN_ANCHORS, jitter=0.35, segments=4)
cigil_poly = serrate_boundary(CIGIL_ANCHORS, jitter=0.36, segments=4)
karluk_poly = serrate_boundary(KARLUK_ANCHORS, jitter=0.40, segments=4)
uygur_poly = serrate_boundary(UYGUR_ANCHORS, jitter=0.42, segments=4)
kirgiz_poly = serrate_boundary(KIRGIZ_ANCHORS, jitter=0.38, segments=4)
yagma_poly = serrate_boundary(YAGMA_ANCHORS, jitter=0.38, segments=4)

print("Kipcak points:", len(kipcak_poly))
print("Oguz points:", len(oguz_poly))
print("Karluk points:", len(karluk_poly))
print("Uygur points:", len(uygur_poly))

# Write JS file or output
with open("polygons_data.json", "w", encoding="utf-8") as f:
    import json
    data = {
        "kipcak": kipcak_poly,
        "oguz": oguz_poly,
        "turkmen": turkmen_poly,
        "cigil": cigil_poly,
        "karluk": karluk_poly,
        "uygur": uygur_poly,
        "kirgiz": kirgiz_poly,
        "yagma": yagma_poly
    }
    json.dump(data, f)
print("Saved polygons_data.json successfully!")
