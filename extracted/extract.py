import zlib
import re

with open('Jeeva_Bindu_PRD_Project100.docx', 'rb') as f:
    data = f.read()

# find all PK headers
pk_offsets = [m.start() for m in re.finditer(b'\x50\x4b\x03\x04', data)]
for offset in pk_offsets:
    # try to read filename length and extra field length
    name_len = int.from_bytes(data[offset+26:offset+28], 'little')
    extra_len = int.from_bytes(data[offset+28:offset+30], 'little')
    filename = data[offset+30:offset+30+name_len].decode('utf-8', 'ignore')
    
    if filename == 'word/document.xml':
        print('Found word/document.xml at offset', offset)
        compressed_start = offset + 30 + name_len + extra_len
        # Let's try to decompress
        # The compressed size is given at offset+18
        comp_size = int.from_bytes(data[offset+18:offset+22], 'little')
        
        compressed_data = data[compressed_start:compressed_start+comp_size]
        try:
            decompressed = zlib.decompress(compressed_data, -15)
            # extract text
            text = re.sub(b'<[^>]+>', b' ', decompressed).decode('utf-8', 'ignore')
            # clean up whitespace
            text = re.sub(r'\s+', ' ', text)
            print("Extracted PRD Content:")
            print(text)
            
            with open('prd.txt', 'w', encoding='utf-8') as out:
                out.write(text)
        except Exception as e:
            print("Decompression failed:", e)
            # if comp size is wrong, try till end
            try:
                decompressed = zlib.decompress(data[compressed_start:], -15)
                text = re.sub(b'<[^>]+>', b' ', decompressed).decode('utf-8', 'ignore')
                text = re.sub(r'\s+', ' ', text)
                print("Extracted PRD Content (full data attempt):")
                print(text)
                with open('prd.txt', 'w', encoding='utf-8') as out:
                    out.write(text)
            except Exception as e2:
                print("Second decompression failed:", e2)
